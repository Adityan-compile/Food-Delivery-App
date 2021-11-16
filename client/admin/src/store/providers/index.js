const storage = localStorage;

const Provider = {
  getAuthState: () => {
    return new Promise((resolve, reject) => {
      const user = storage.getItem('USER');
      if (user === null || user === undefined) {
        return resolve({
          authenticated: false,
        });
      }
      resolve({
        user: user,
        authenticated: true,
      });
    });
  },
};

export default Provider;
