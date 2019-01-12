import React from 'react';
import { Alert } from 'antd';

import './index.less';

export default function ShowErrorTips(props) {
    const { message } = props;

    if (!message) {
        return null;
    }

    let list = [];

    if (!Array.isArray(message)) {
        list = [message];
    } else {
        list = [...message];
    }

    return (
        <div className="show-error-tips">
            {
                list.map((item, index) => {
                    return (
                        <Alert key={index}
                               message={typeof item === 'object' ? JSON.stringify(item) : item}
                               type="error"
                        />
                    );
                })
            }
        </div>
    );
}