import React from 'react';
import styles from './Modal.scss';
import classNames from 'classnames/bind';
import { Modal as BModal, ModalHeader as BModalHeader, ModalBody as BModalBody, ModalFooter as BModalFooter } from 'reactstrap';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

const Modal = ({ base, title, footer, children, toggle, onClose, isBtnCenter, isCloseBtnFooter, ...rest }) => {
    return (
        <BModal
            toggle={toggle}
            centered={true}
            contentClassName={cx('custom-modal')}
            {...rest}
        >
            <BModalHeader className={cx('custom-header')}>{title}</BModalHeader>
            <BModalBody className={cx('custom-body')}>{children}</BModalBody>
            <BModalFooter className={cx('custom-footer', isBtnCenter ? 'center' : null)}>
                {footer}
                {isCloseBtnFooter ? <Button className={cx('custom-btn')} onClick={onClose}>닫기</Button> : null}
            </BModalFooter>
        </BModal>
    )
}

export default Modal;