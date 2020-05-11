import React from 'react';
import ReactQuill from 'react-quill';
import './TextEditor.scss';

const textEditor = ({ imageHandler, ...rest}) => {
    const modulesQuill = {
        toolbar: [
            [{size: []}],
            [{align: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean']
        ]
    }

    const formatsQuill = [
        'size', 'align',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link'
    ]

    return (
        <ReactQuill
            modules={modulesQuill}
            formats={formatsQuill}
            className='text-editor'
            placeholder="내용을 입력해주세요."
            {...rest}
        />
    )
}

export default textEditor