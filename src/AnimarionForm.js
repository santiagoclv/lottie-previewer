
import React from 'react';
import {
  Form,
  Button,
  Upload,
  Icon,
  Input,
  Typography,
} from 'antd';

const { Title } = Typography;

let id = 0;

class AnimarionForm extends React.Component {

    state = {
        fileDate: null
    }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { placeholders } = values;
        let animationTemplate =  this.state.fileDate;
        if(Array.isArray(placeholders)){
          placeholders.forEach( placeholder => {
            animationTemplate = animationTemplate.replace(placeholder.key, placeholder.value);
          });
        }
        this.props.onLoadAnimation(animationTemplate);
      }
    });
    
  };

  normFile = e => {
    if (e.file){
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({fileDate: reader.result})
          };
        reader.readAsText(e.file);
        return e;
    }
    return e && e.fileList;
  };

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayoutItem = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 24, offset: 0 }
      }
    };

    getFieldDecorator("keys", { initialValue: [] });

    const keys = getFieldValue("keys");
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...formItemLayoutWithOutLabel}
        style={{ width: 'calc(100% - 10px)', margin: '0 5px' }}
        key={k}
      >
        <Form.Item required={true} style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
        {getFieldDecorator(`placeholders[${k}].key`, {
          validateTrigger: ["onChange", "onBlur"],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input placeholder's key or delete this field."
            }
          ]
        })( <Input placeholder="key" /> )}
        </Form.Item>
        <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
        <Form.Item required={true} style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
        {getFieldDecorator(`placeholders[${k}].value`, {
          validateTrigger: ["onChange", "onBlur"],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input placeholder's value or delete this field."
            }
          ]
        })(
          <Input
            placeholder="value"
            style={{ display: 'inline-block', width: 'calc(100% - 18px)', marginRight: '4px'}}
          />
        )}
        <Icon
          className="dynamic-delete-button"
          type="minus-circle-o"
          onClick={() => this.remove(k)}
        />
        </Form.Item>
      </Form.Item>
    ));

    return (
      <Form {...formItemLayoutItem} onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayoutWithOutLabel} style={{ width: 'calc(100% - 20px)', margin: '10px' }}>
          {getFieldDecorator('dragger', {
            valuePropName: 'file',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger multiple={false} name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>,
          )}
        </Form.Item>
        {formItems.length > 0 && <Title level={4}>Placeholders</Title>}
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: "60%" }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'validate_other' })(AnimarionForm);