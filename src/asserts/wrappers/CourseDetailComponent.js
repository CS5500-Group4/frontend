import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 0 350px 0 350px;

  .course_all_detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    padding-bottom: 60px;
  }

  .course_detail h1 {
    padding: 0;
    margin: 0;
  }

  .course_detail button {
    margin-top: 20px;
    border-radius: 10px;
  }

  .rating_distribution {
    border: 1px solid white;
    border-radius: 10px;
    padding: 0 16px 16px 16px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 1fr 0.2fr;
    column-gap: 6px;
    //display: flex;
    padding-bottom: 4px;
    //align-items: center;
    //justify-content: space-between;
  }

  .bar {
    width: 200px;
    height: 20px;
    background-color: white;
    border-radius: 4px;
    justify-content: flex-end;
  }

  .bar_color {
    height: 20px;
    border-radius: 4px;
    background-color: #1976d2;
  }

  /* review */

  .review_list {
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-radius: 5px;
    border: 1px solid white;
    padding: 10px 20px 30px 20px;
    margin-top: 20px;
  }

  .review_list_detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .review_text {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }

  .review_date {
    margin-left: auto;
  }

  .review h3 {
    padding: 0;
    margin: 0;
  }

  .rating_number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #1976d2;
    font-size: 3em;
    margin: 8px 0 8px 0;
  }
`
export default Wrapper
