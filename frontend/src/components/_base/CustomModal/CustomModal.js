import React from 'react';
import styles from './CustomModal.scss';
import classNames from 'classnames/bind';
import { Modal as BModal, ModalHeader as BModalHeader, ModalBody as BModalBody, ModalFooter as BModalFooter } from 'reactstrap';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const CustomModal = ({ base, title, footer, children, toggle, onClose, isBtnCenter, titleInfo, submitBtnText, clickToSubmit, colour1, colour2, colour3, contentLists, finalContentTitle, finalContentContent, className, noCancelBtn, ...rest }) => {
    return (
        <BModal
            toggle={toggle}
            centered={true}
            contentClassName={cx('custom-modal', className, colour1 && 'colour1', colour2 && 'colour2', colour3 && 'colour3')}
            {...rest}
        >
            <BModalHeader className={cx('custom-header')}><p className={cx('title')}>{title}</p><p className={cx('title-info')}>{titleInfo}</p></BModalHeader>
            <BModalBody className={cx('custom-body')}>
                {contentLists.map((list, idx) => {
                    return <div key={idx} className={cx('content-box', list.blocklize && 'content-block-box')}>
                        <p className={cx('title')}>{list.title}</p>
                        <p className={cx('content')}>{list.content}</p>
                    </div>
                })}
                {finalContentContent && <div className={cx('content-box')}>
                    <p className={cx('title')}>{finalContentTitle}</p>
                    <p className={cx('content')}>{finalContentContent}</p>
                </div>}
                {children}
            </BModalBody>
            <BModalFooter className={cx('custom-footer', isBtnCenter && 'center')}>
                {noCancelBtn ? null : <Button disabled className={cx('custom-btn')} onClick={onClose}>취소</Button>}
                <Button type='submit' className={cx('custom-btn', 'submit-btn')} onClick={clickToSubmit}>{submitBtnText}</Button>
            </BModalFooter>
        </BModal>
    )
}

CustomModal.defaultProps = {
    contentLists: []
}

export default CustomModal;