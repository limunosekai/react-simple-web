import React, { Component } from 'react';

class Content extends Component {
  state = {
    value: '',
  };

  onChangeHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  check = (event) => {
    event.preventDefault();
    if (this.state.value === '') {
      alert('검색어를 입력하세요');
    }
  };

  render() {
    return (
      <article id='contents'>
        <h1>Board</h1>
        <input type='button' value='write' className='btn' />
        <table id='board'>
          <tr>
            <th className='tno'>No.</th>
            <th className='twriter'>Writer</th>
            <th className='ttitle'>Title</th>
            <th className='tread'>Read</th>
            <th className='tdate'>Date</th>
          </tr>
          <tr>
            <td>21</td>
            <td>Lim</td>
            <td className='left'>hi~</td>
            <td>20</td>
            <td>2021-02-09</td>
          </tr>
        </table>
        <form action='#' method='POST' name='find_frm' onSubmit={this.check}>
          <div id='table_search'>
            <select className='select_box' name='find' size='1'>
              <option value='writer'>이름</option>
              <option value='title'>제목</option>
              <option value='content'>내용</option>
            </select>
            <input
              type='text'
              className='input_box'
              name='find_box'
              onChange={this.onChangeHandler}
            />
            <input type='submit' value='search' className='btn' />
          </div>
        </form>
        <div className='clear'></div>
        <div id='page_control'>
          <a href='#'>Prev</a>
          <a href='#'>1</a>
          <a href='#'>2</a>
          <a href='#'>3</a>
          <a href='#'>4</a>
          <a href='#'>5</a>
          <a href='#'>6</a>
          <a href='#'>7</a>
          <a href='#'>8</a>
          <a href='#'>9</a>
          <a href='#'>Next</a>
        </div>
      </article>
    );
  }
}

export default Content;
