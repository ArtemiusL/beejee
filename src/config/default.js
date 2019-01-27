module.exports = {
  port: process.env.PORT,
  defaultLocale: 'en',
  api: 'https://uxcandy.com/~shapoval/test-task-backend',
  developer: 'artem',
  app: {
    htmlAttributes: { lang: 'ru' },
    title: 'Beejee task',
    titleTemplate: 'Tesk task for you!!',
    meta: [
      {
        name: 'description',
        content: 'Beejee - test task',
      },
    ],
  },
};
