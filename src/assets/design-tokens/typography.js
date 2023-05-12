module.exports = {
  theme: {
    extend: {
      fontSize: {
        "step--2": "clamp(0.63rem, calc(0.71rem + -0.10vw), 0.69rem)",
        "step--1": "clamp(0.78rem, calc(0.75rem + 0.12vw), 0.84rem)",
        "step-0": "clamp(0.88rem, calc(0.79rem + 0.43vw), 1.13rem)",
        "step-1": "clamp(0.98rem, calc(0.81rem + 0.90vw), 1.50rem)",
        "step-2": "clamp(1.11rem, calc(0.80rem + 1.55vw), 2.00rem)",
        "step-3": "clamp(1.25rem, calc(0.75rem + 2.47vw), 2.66rem)",
        "step-4": "clamp(1.40rem, calc(0.65rem + 3.74vw), 3.55rem)",
        "step-5": "clamp(1.58rem, calc(0.48rem + 5.49vw), 4.74rem)",
      },
    },
  },
};
