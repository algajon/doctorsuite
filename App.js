// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GuestLanding from './views/GuestLanding';
import GuestOnboarding from './views/GuestOnboarding';
import Login from './Login';
import Register from './views/Register';
import MainMenu from './views/MainMenu';

export default function App() {
  const [page, setPage] = useState('landing');

  return (
    <SafeAreaView style={styles.container}>
      {page === 'landing' && (
        <GuestLanding
          onContinueAsGuest={() => setPage('onboarding')}
          onLogin={() => setPage('login')}
          onSignUp={() => setPage('register')}
        />
      )}

      {page === 'onboarding' && (
        <GuestOnboarding onFinish={() => setPage('landing')} />
      )}

      {page === 'login' && (
        <Login
          onLogin={() => setPage('MainMenu')}
          onNavigateToRegister={() => setPage('register')}
        />
      )}

      {page === 'register' && (
        <Register
          navigation={{
            navigate: (screen) => setPage(screen),
          }}
        />
      )}

      {page === 'MainMenu' && <MainMenu />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
});
