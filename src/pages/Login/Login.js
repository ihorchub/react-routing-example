import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" nane="name" />
        <button type="submit">Ok</button>
      </form>
    </div>
  );
};

export default Login;
