import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classNames from 'classnames/bind';
import styles from './FindPwSuccessForm.scss';

import { Link } from 'react-router-dom';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';
import InfoBox from 'components/_base/InfoBox';

const cx = classNames.bind(styles);

const FindPwSuccessForm = ({ afterCopy, code }) => {

    const infos = [{
        content: <span>임시 비밀번호를 꼭 복사한 후 로그인을 진행하세요.<br/>한번 발급된 임시 비밀번호는 다시 조회할 수 없습니다.</span>
    }];

    return (
        <div className={cx('wrapper')}>
            <Input
                value={code}
                readOnly
                name='code'
            />
            <div className={cx('btn-box')}>
                <CopyToClipboard text={code} onCopy={afterCopy}>
                    <Button>복사</Button>
                </CopyToClipboard>
            </div>
            <div className={cx('info-box')}>
                <InfoBox className={cx('info')} lists={infos}/>
            </div>
            <div className={cx('link-box')}>
                <Button linkStyle><Link to="/login">로그인 하기</Link></Button>
            </div>
        </div>
    )
};

export default FindPwSuccessForm;