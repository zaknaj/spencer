<script>
  import Expense from "./Expense.svelte";
</script>

<style>
  .main {
    flex: 1;
    background: #ffffff;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.15);
    border-radius: 15px 15px 0 0;
    padding: 25px 20px;
    padding-bottom: 120px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
  }

  .search {
    height: 40px;
    width: 40px;
    border-radius: 10px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search img {
    height: 16px;
  }

  .duration {
    font-size: 12px;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.5);
  }

  .add-button {
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 32px;
    line-height: 1;
    background: linear-gradient(180deg, #10c600 0%, #0c9400 100%);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 60px;
    height: 60px;
    width: 60px;
  }
</style>

<div class="main">
  <div class="header">
    <div class="left">
      <div class="title">List of expenses</div>
      <div class="duration">Current month</div>
    </div>
    <div class="search">
      <img src="images/search.svg" alt="search icon" />
    </div>
  </div>
  <div class="list">
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />
    <Expense />

  </div>
  <div class="add-button">
    <a href="/add">
      <div>+</div>
    </a>
  </div>
</div>
