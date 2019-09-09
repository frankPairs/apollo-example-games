export const matchResolvers = {
  Match: {
    dateFormatted({ date }) {
      return new Date(date).toLocaleDateString();
    },
  },
};
