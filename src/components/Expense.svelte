<script>
  let expanded = false;
  let showDeleteConfirm = false;
</script>

<style>
  .main {
    background: #ffffff;
    border: 1px solid #eee;
    box-shadow: 0px 1px 2px #ddd;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .details {
    margin-bottom: 5px;
  }

  .category {
    font-weight: bold;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.35);
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .date {
    font-weight: bold;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.35);
  }

  .subcategory {
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    color: #0eb000;
  }

  .amount {
    font-weight: bold;
    font-size: 14px;
    color: #000000;
  }

  .additional-info {
    font-size: 14px;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px 0;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .btn {
    background: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
  }

  .right {
    display: flex;
  }

  .right .btn {
    margin-left: 12px;
  }

  .btn.modify {
    color: #0c9c01;
  }

  .btn.confirm-delete {
    color: white;
    background: red;
    width: unset;
    padding: 0 12px;
  }
</style>

<div class="main" on:click={() => (expanded = !expanded)}>
  <div class="line details">
    <div class="category">food</div>
    <div class="date">Sept 21, 2020 @ 2:14 PM</div>
  </div>
  <div class="line">
    <div class="subcategory">Groceries</div>
    <div class="amount">140 DHS</div>
  </div>
  {#if expanded}
    <div class="additional-info">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div class="actions">
        <div class="left" />
        <div class="right">
          {#if !showDeleteConfirm}
            <div class="btn modify" on:click={e => e.stopPropagation()}>
              <img src="images/edit.svg" alt="edit icon" />
            </div>
          {/if}
          {#if showDeleteConfirm}
            <div
              class="btn confirm-delete"
              on:click={e => {
                e.stopPropagation();
                console.log('deleted');
                expanded = false;
                showDeleteConfirm = false;
              }}>
              Confirm delete ?
            </div>
          {:else}
            <div
              class="btn"
              on:click={e => {
                e.stopPropagation();
                showDeleteConfirm = true;
              }}>
              <img src="images/delete.svg" alt="delete icon" />
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
