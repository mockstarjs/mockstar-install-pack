import React from 'react';
import { Alert } from 'antd';

import './index.less';

export default function Index(props) {
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
        <div className="create-new-project-tips">
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