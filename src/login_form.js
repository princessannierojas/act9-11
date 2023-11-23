import React from 'react';
import {styles} from './styles';

const LoginForm = () => { 
  return (
    <div style={{fontFamily: 'Poppins, sans-serif, "Material Symbols Rounded", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(90deg, rgba(2,48,32,1) 34%, rgba(53,94,59,1) 92%)',
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
      <div style={{width: '500px',
        background: 'rgba(255, 255, 255, 0.7)',
        padding: '3rem',
        borderRadius: '10px',
        position: 'relative',
        margin: 0, 
      }}>
      <div style={{marginBottom: '1rem',
        margin: 'auto',
        textAlign: 'center',
      }}>
        <img src="logo.png" alt="logo" style={{width: '80px',}} />
      </div>
      <div style={{textAlign: 'center',
        margin: 'auto',
        marginBottom: '1rem', 
      }}>
        <h1 style={{fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          margin: 0,
          }}> Log In </h1>
      </div>

      <form style={styles.form}>
        <div style={styles.formItem}>
          <span className="form-item-icon material-symbols-rounded" style={styles.formItemIcon}>
            mail
          </span>
          <input type="text" placeholder="Enter your email" id="emailForm" style={styles.input} required />
        </div>
        <div style={styles.formItem}>
          <span className="form-item-icon material-symbols-rounded" style={styles.formItemIcon}>
            lock
          </span>
          <input type="password" placeholder="Enter your password" id="passwordForm" style={styles.input} required />
        </div>
        <div style={{ ...styles.formItemOther, display: 'flex', justifyContent: 'center'}}>
          <a href="#" style={{ ...styles.link, textDecoration: 'underline'}}>
            Forgot password?
          </a>
        </div>
        <button type="submit" style={{...styles.button, cursor: 'pointer'}}>
          Log In
        </button>
      </form>

      <div style={styles.footer}>
        Don't have an account? <a href="#" style={{ ...styles.link, textDecoration: 'underline'}}>Sign up now.</a>
      </div>
    </div>
  </div>
  );
};
  
export default LoginForm;