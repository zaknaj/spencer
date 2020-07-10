<script>
  import ModalValues from "../components/ModalValues.svelte";
  import {
    daysValues,
    monthsValues,
    yearsValues,
    hoursValues,
    minutesValues
  } from "../constants.js";
  let modalData = {
    show: false,
    values: [],
    onChange: () => {}
  };
  const currDate = new Date();
  let data = {
    category: "",
    amount: 0,
    time: {
      day: currDate.getDate(),
      month: monthsValues[currDate.getMonth()],
      year: currDate.getFullYear(),
      hours: currDate.getHours(),
      minutes: currDate.getMinutes()
    }
  };
</script>

<style>
  .main {
    position: relative;
    padding-bottom: 80px;
    padding-top: 30px;
    background: white;
  }

  .line {
    width: 100%;
  }
  .title,
  .inputs {
    padding: 0 15px;
  }

  .go-back {
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 14px;
    padding: 15px;
    /* border: 1px solid red; */
    display: inline-block;
    margin-bottom: 5px;
  }

  .title {
    font-style: italic;
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 40px;
  }

  .submit button {
    position: fixed;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, #10c600 0%, #0c9400 100%);
    height: 60px;
    width: 100%;
    font-style: italic;
    font-weight: 800;
    font-size: 16px;
    color: #ffffff;
    border-radius: 0;
    box-shadow: none;
  }

  input,
  textarea,
  button {
    height: 60px;
    background: #f4f4f4;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    border-top: none;
    min-width: 0px;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }

  .category input {
    width: 100%;
  }

  .line {
    display: flex;
    margin-bottom: 30px;
  }

  .amount button {
    display: block;
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 0;
    background: linear-gradient(to top, #e4e4e4, white);
    box-shadow: inset 0px 2px 0px 0px rgba(0, 0, 0, 0.12);
    flex: 0 0 55px;
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    font-size: 13px;
  }

  .amount button:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  .amount button:nth-child(2),
  .amount button:nth-child(4) {
    border-radius: 0;
    border-right: 0;
    border-left: 0;
    font-size: 20px;
  }
  .amount button:nth-child(5) {
    border-radius: 0 10px 10px 0;
  }

  .amount .amount-input {
    flex: 1;
    position: relative;
  }
  .amount .amount-input input {
    border-radius: 0;
    min-width: 0;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
  }
  .amount .amount-input:after {
    content: "DHS";
    display: block;
    position: absolute;
    font-size: 12px;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.35;
  }

  .info-input {
    height: 120px;
    width: 100%;
    text-align: left;
    padding: 12px 15px;
    resize: none;
  }

  .date {
    display: flex;
    align-items: center;
  }
  .date-inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 8px;
  }

  .time-inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .date-inputs button {
    height: 60px;
  }

  .date-inputs button:nth-child(1) {
    width: 60px;
    border-radius: 10px 0 0 10px;
  }

  .date-inputs button:nth-child(3) {
    border-radius: 0 10px 10px 0;
    width: 70px;
  }

  .date-inputs button:nth-child(2) {
    border-radius: 0;
    border-right: none;
    width: 60px;
    border-left: none;
  }

  .time-inputs button {
    height: 60px;
  }
  .time-inputs button:nth-child(1) {
    border-radius: 10px 0 0 10px;
    border-right: none;
    width: 50px;
    text-align: right;
  }
  .time-inputs button:nth-child(2) {
    border-radius: 0 10px 10px 0;
    border-left: none;
    width: 40px;
    text-align: left;
    padding-left: 5px;
  }
</style>

<div class="main">
  <a href="/">
    <div class="go-back">Go back</div>
  </a>
  <div class="title">Add an expense</div>
  <form
    on:submit={e => {
      e.preventDefault();
    }}>
    <div class="inputs">
      <div class="line category">
        <input type="text" placeholder="Category" class="category-input" />
      </div>
      <div class="line amount">
        <button on:click={() => (data.amount -= 10)}>-10</button>
        <button on:click={() => (data.amount -= 1)}>-</button>
        <div class="amount-input">
          <input type="number" bind:value={data.amount} />
        </div>
        <button on:click={() => (data.amount += 1)}>+</button>
        <button on:click={() => (data.amount += 10)}>+10</button>
      </div>

      <div class="line">
        <textarea placeholder="Additional information" class="info-input" />
      </div>
      <div class="line date">
        <div class="date-inputs">
          <button
            on:click={() => {
              modalData.show = true;
              modalData.values = daysValues;
              modalData.onChange = val => {
                modalData.show = false;
                modalData.values = [];
                data.time.day = val;
              };
            }}>
            {data.time.day}
          </button>
          <button
            on:click={() => {
              modalData.show = true;
              modalData.values = monthsValues;
              modalData.onChange = val => {
                modalData.show = false;
                modalData.values = [];
                data.time.month = val;
              };
            }}>
            {data.time.month}
          </button>
          <button
            on:click={() => {
              modalData.show = true;
              modalData.values = yearsValues;
              modalData.onChange = val => {
                modalData.show = false;
                modalData.values = [];
                data.time.year = val;
              };
            }}>
            {data.time.year}
          </button>
        </div>
        <div class="time-inputs">
          <button
            on:click={() => {
              modalData.show = true;
              modalData.values = hoursValues;
              modalData.onChange = val => {
                modalData.show = false;
                modalData.values = [];
                data.time.hours = val;
              };
            }}>
            {data.time.hours && data.time.hours + ' H'}
          </button>
          <button
            on:click={() => {
              modalData.show = true;
              modalData.values = minutesValues;
              modalData.onChange = val => {
                modalData.show = false;
                modalData.values = [];
                data.time.minutes = val;
              };
            }}>
            {data.time.minutes}
          </button>
        </div>
      </div>

    </div>
    <div class="submit">
      <button type="submit">Add</button>
    </div>
  </form>
  {#if modalData.show}
    <ModalValues values={modalData.values} onChange={modalData.onChange} />
  {/if}
</div>
