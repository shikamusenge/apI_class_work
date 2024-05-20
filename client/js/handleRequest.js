export const handleRequest = async (promise) => {
  try {
    const hr = await promise;
    const data = await hr.json();
    if (data.ok) {
      return await data;
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};
