import AXIOS from "../../network/axios";

export const DeleteUserAdmin = async (url, id, queryClient, toast) => {
    
    await AXIOS.delete(`${url}/${id}`)
    .then((response) => {
      queryClient.invalidateQueries("users");
      toast.success('User deleted successfully !');
    })
    .catch((error) => {
      toast.error('Error deleting user:', error);
    });
}