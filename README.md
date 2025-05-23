### Redesign Process Overview

Throughout my redesign, I tried to follow the **"less is more"** rule as much as possible. I began by designing a **mobile-first interface**, then scaled it up for larger screens.

---

### Color Adjustments

I tackled the colors early on. I'm not sure if the original palette was part of branding, but the **dark blue** in contrast with the **really black background** just didn’t feel right. I **lightened the background and the blues** to make the interface more inviting and easier on the eyes. However, I **kept the original dark blue** for marking the selected skip — it provides a strong visual anchor.

---

### Content and Layout

Starting at the top of the screen and working my way down (skipping — pun intended — the stepper for now):

- The **title** is fine, but the **subtitle** felt redundant. I replaced it with information that’s potentially more relevant to the user.
- While I love cards in web design, the original ones felt off — **visually cluttered and space-wasting**.

  - I **removed the background** and moved the elements **closer together** to clean things up.
  - I **merged the '14-day hire period' subtitle with the 'Select This Skip' button**, placing them to the right side of the card to use that free space effectively.
  - The **chips floating over the images were removed** to showcase the skips better.

To mark the **selected card**, I reduced the image brightness and placed a **blue checkmark** in the center. On mobile, cards can be selected either by tapping the button or the image itself. Only one card can be selected at a time — selecting a new one deselects the previous.

---

### Handling Warnings

Once the main section was complete, I hit my first challenge: **What to do with the warnings?**

- The first warning was a quick fix: I displayed a **yellow triangle with the text beside it**, placed under the button and the title/price section.
- The second warning — about bins not supporting heavy weight — was trickier. I wasn’t sure if this was an intended feature, but from a UX perspective, it’s **bad design to show non-interactive UI elements**.

  - So, I decided to **hide those cards entirely** unless the user selected heavy waste in a previous step. This keeps the UI clean and reduces confusion.

---

### Grid and Responsiveness

The grid structure is **largely similar to the original**, but I added **an extra column for XL screens**. This ensures wider displays are better utilized if more data is available.

---

### Stepper Redesign

Before jumping into the stepper, I **removed the little popup** at the bottom of the screen. From the start, I knew showing all steps on small screens wasn’t ideal. Instead, I:

- Replaced it with a **progress bar** displaying “Step X of Y” — dynamically filled to represent progress.
- Added **navigation buttons** beside it.
- The **Continue** button is only enabled if a skip is selected.

This layout remains the same for **medium screens (like tablets)** to maintain consistency.

On **larger screens**, I returned to the **original stepper design**:

- I used a **lighter blue for accents** and added **more spacing** between elements.
- Navigation buttons remain next to the stepper to maintain visual consistency across devices.

---

### Final Thoughts

The final design feels **more modern**, with **less visual clutter**. The main guiding principles were:

- **Proximity** — grouping related elements closely to suggest relationship.
- **Minimalism** — removing anything unnecessary to let users focus on what really matters.

The result is a **visually pleasing interface** with a strong **user experience across all screen sizes**.
