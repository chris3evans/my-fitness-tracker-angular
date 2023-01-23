const saveWorkout = async (req: any, res: any) => {
  try {
    console.log(req.body);
    res.send(200);
  } catch (error) {
    console.log(
      `There was an error saving a workout to the database - server side: ${error}`
    );
  }
};

module.exports = { saveWorkout };
