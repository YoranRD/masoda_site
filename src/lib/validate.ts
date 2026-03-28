export const assertCondition = (condition: boolean, message: string): asserts condition => {
  if (!condition) {
    throw new Error(message);
  }
};

export const ensureHttpsUrl = (value: string, label: string): void => {
  let parsedUrl: URL;

  try {
    parsedUrl = new URL(value);
  } catch (error) {
    throw new Error(`${label}: URL invalide (${String(error)})`);
  }

  assertCondition(parsedUrl.protocol === "https:", `${label}: le protocole HTTPS est requis`);
};

export const ensureUniqueValues = (values: string[], label: string): void => {
  const uniqueValues = new Set(values);
  assertCondition(uniqueValues.size === values.length, `${label}: des doublons sont présents`);
};

export const ensureChronologicalRange = (startIso: string, endIso: string, label: string): void => {
  const start = new Date(startIso);
  const end = new Date(endIso);

  assertCondition(Number.isFinite(start.getTime()), `${label}: date de début invalide`);
  assertCondition(Number.isFinite(end.getTime()), `${label}: date de fin invalide`);
  assertCondition(end.getTime() > start.getTime(), `${label}: la fin doit être postérieure au début`);
};

export const ensurePositiveInteger = (value: number, label: string): void => {
  assertCondition(Number.isInteger(value), `${label}: un entier est requis`);
  assertCondition(value > 0, `${label}: une valeur strictement positive est requise`);
};

