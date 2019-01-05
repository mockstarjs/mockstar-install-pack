import React from 'react';

function noop() {
}

// 参考了  https://github.com/svenanders/react-iframe/blob/master/index.js
export default function Iframe(props) {
    const defaultProps = {
        // ref: 'iframe',
        frameBorder: '0',
        src: props.url,
        target: '_parent',
        allowFullScreen: props.allowFullScreen || false,
        style: Object.assign(
            {},
            {
                position: props.position || 'absolute',
                display: props.display || 'block',
                height: props.height || '100%',
                width: props.width || '100%'
            },
            props.styles || {}
        ),
        height: props.height || '100%',
        name: props.name || '',
        width: props.width || '100%',
        onLoad: props.onLoad || noop,
        onMouseOver: props.onMouseOver || noop,
        onMouseOut: props.onMouseOut || noop
    };

    return React.createElement(
        'iframe',
        Object.assign(
            defaultProps,
            props.id ? { id: props.id } : {},
            props.sandbox ? { sandbox: props.sandbox } : {},
            props.allow ? { allow: props.allow } : {},
            props.className ? { className: props.className } : {}
        )
    );
}
