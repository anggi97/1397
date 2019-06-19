<form id="rating"
  method="post"
  action-xhr="set"
  target="_blank">
  <fieldset class="rating">
    <input name="rating"
      type="radio"
      id="rating5"
      value="5"
      on="change:rating.submit" />
    <label for="rating5"
      title="5 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating4"
      value="4"
      on="change:rating.submit" />
    <label for="rating4"
      title="4 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating3"
      value="3"
      on="change:rating.submit" />
    <label for="rating3"
      title="3 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating2"
      value="2"
      on="change:rating.submit"
      checked="checked" />
    <label for="rating2"
      title="2 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating1"
      value="1"
      on="change:rating.submit" />
    <label for="rating1"
      title="1 stars">☆</label>
  </fieldset>
  <div submit-success>
    <template type="amp-mustache">
      <p>Thanks for rating {{rating}} star(s)!</p>
    </template>
  </div>
  <div submit-error>
    <template type="amp-mustache">
      Looks like something went wrong. Please try to rate again. {{error}}
    </template>
  </div>
</form>
