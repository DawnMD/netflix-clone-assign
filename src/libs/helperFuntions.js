export const getYear = (dateString) => {
	return dateString.substring(0, dateString.indexOf('-'));
};

export const runtimeConverter = (runtime) => {
	return `${Math.floor(runtime / 60)}h ${runtime % 60}min`;
};
