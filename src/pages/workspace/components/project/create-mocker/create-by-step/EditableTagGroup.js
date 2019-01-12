import React, { Component } from 'react';
import { Icon, Input, Tag, Tooltip } from 'antd';

export default class EditableTagGroup extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            inputVisible: false,
            inputValue: ''
        };
    }

    handleClose = (removedTag) => {
        const value = this.props.value.filter(tag => tag !== removedTag);
        console.log(value);

        this.props.onChange(value);
    };

    showInput = () => {
        this.setState({
            inputVisible: true
        }, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleInputConfirm = () => {
        const inputValue = this.state.inputValue;
        let value = this.props.value || [];

        if (inputValue && value.indexOf(inputValue) === -1) {
            value = [...value, inputValue];
        }

        console.log(value);

        this.setState({
            inputVisible: false,
            inputValue: ''
        });

        this.props.onChange(value);
    };

    saveInputRef = input => this.input = input;

    render() {
        const { value = [] } = this.props;
        const { inputVisible, inputValue } = this.state;

        return (
            <div>
                {
                    value.map((tag, index) => {
                        const isLongTag = tag.length > 20;

                        const tagElem = (
                            <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );

                        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                    })
                }

                {
                    inputVisible ? (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{ width: 78 }}
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                    ) : null
                }
                {
                    !inputVisible ? (
                        <Tag
                            onClick={this.showInput}
                            style={{ background: '#fff', borderStyle: 'dashed' }}
                        >
                            <Icon type="plus" /> 新建
                        </Tag>
                    ) : null
                }
            </div>
        );
    }
}

EditableTagGroup.defaultProps = {
    // value: [],
    onChange: (value) => {
    }
};
