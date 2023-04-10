module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --ext js,jsx,ts,tsx --quiet --fix --"],
  "*.{md,mdx,css,yaml,yml}": ["prettier --write"]
}
