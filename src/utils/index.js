export const modifyName = (isLoading, success, data, error) => ({
  isLoading: isLoading || false,
  success: success || null,
  data: data || [],
  error: error || null,
});
