export const getCourseAndModuleFromBoilerplate = (params: {
  boilerplate: string;
}) => {
  const { boilerplate } = params;

  if (boilerplate.indexOf(':') < 0) {
    throw new Error(
      `Invalid boilerplate name pattern. Correct pattern is courseName:moduleName, but received ${boilerplate}`,
    );
  }

  const [courseName, moduleName] = boilerplate.split(':');

  if (!courseName || !moduleName) {
    throw new Error('Invalid boilerplate name. No course or module found.');
  }

  return {
    courseName,
    moduleName,
  };
};
