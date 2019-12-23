import React from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from '../../controls';
import {AuthFormView} from '../../common';
// import styles from './LoginStyles.scss';
import Checkbox from "../../controls/Checkbox/CheckboxView";
import { Footer } from "../../common";

const LoginView = ({
                     onChange,
                     onSubmit,
                     errors,
                   }) => {
  return (
    <div className={'auth__container'}>
      <AuthFormView title={'Login'}>
        <div className={'form-group'}>
          <Input
            type='text'
            onChange={onChange('email')}
            label={'Email Address'}
            error={errors['email']}
            placeholder={'Email Address'}
          />
        </div>
        <div className={'form-group'}>
          <Input
            type='password'
            onChange={onChange('password')}
            label={'Password'}
            error={errors['password']}
            placeholder={'Password'}
          />
        </div>
        <Button
          onClick={onSubmit}
          title='Login'
        />
        <div className={'form-group d-flex alight-item-center justify-content-between'}>
          <Checkbox
            text={'Remember Me'}
            onChange={() => null}
          />
          <a href='#' className={'auth__forgotLink'}>Forgot password?</a>
        </div>
        <div className={'auth__signIn'}>
          {'Don’t have an account? '}
          <a href='#'>Sign Up</a>
        </div>
      </AuthFormView>
      <Footer/>
    </div>
  );
};

LoginView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  navTo: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default LoginView;
