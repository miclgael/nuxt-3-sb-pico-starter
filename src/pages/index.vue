<template>
  <div>
    <v-section :background="'orange'">
      <h2>Coming soon <em>Every Alterations</em> - a brand new 14 track LP</h2>
      <p>
        Pre-save now!
      </p>
    </v-section>

    <v-section :background="'yellow'">
      <h2>Fruits 3X1</h2>

      <v-grid :cols="3" :rows="1">
        <v-grid-cell>
          <p>🍌 Banana</p>
        </v-grid-cell>
        <v-grid-cell>
          <p>🍍 Pineapple</p>
        </v-grid-cell>
        <v-grid-cell>
          <p>🍊 Orange</p>
        </v-grid-cell>
        <div>
          <p>That's right, a div.</p>
        </div>
      </v-grid>
    </v-section>

    <v-section :background="'beige'">
      <h2>Fruits 2X2</h2>

      <v-grid :cols="2" :rows="2">
        <v-grid-cell>
          <p>🍍 Pineapple</p>
        </v-grid-cell>
        <v-grid-cell>
          <p>🍎 Apple</p>
        </v-grid-cell>
        <div>
          <p>That's right, a div.</p>
        </div>
        <v-grid-cell>
          <p>🥝 Kiwi</p>
          <p>🍅 Tomato!?</p>
        </v-grid-cell>
      </v-grid>
    </v-section>
  </div>
</template>
