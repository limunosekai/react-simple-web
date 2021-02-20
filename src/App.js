import React, { Component } from 'react';
import Logo from './components/header/logo';
import Login from './components/header/login';
import Navigation from './components/header/navigation';
import SideBar from './components/contents/side/side';
import Content from './components/contents/content/content';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='wrap'>
        {/* 헤더 */}
        <header>
          <Login />
          <Logo />
          <Navigation />
        </header>

        {/* 배너 */}
        <div className='clear'></div>
        <div id='sub_img'></div>

        {/* 사이드바 */}
        <SideBar />

        {/* 컨텐츠 */}
        <Content />

        {/* 푸터 */}
        <div className='clear'></div>
        <Footer />
      </div>
    );
  }
}
export default App;
