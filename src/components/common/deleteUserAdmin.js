import AXIOS from "../../network/axios";

export const DeleteUserAdmin = async (url, id, queryClient, toast, reload) => {
    
    await AXIOS.delete(`${url}/${id}`)
    .then((response) => {
      queryClient.invalidateQueries(reload);
      toast.success('User deleted successfully !');
    })
    .catch((error) => {
      toast.error('Error deleting user:', error);
    });
}