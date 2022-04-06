import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const validationSchema = yup.object({
  usuario: yup
    .string('Usuário')
    .required('Usuário é obrigatório'),
  senha: yup
    .string('Digite a senha')
    .min(8, 'Senha deve ter no mínimo 8 carateres')
    .required('Senha é obrigatória'),
});

function App() {
  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="sm" align="center">
      <Box mt={2}>
      <form onSubmit={formik.handleSubmit}>
      <Box mt={5}>
          <TextField
            fullWidth
            id="usuario"
            name="usuario"
            label="Usuário"
            value={formik.values.usuario}
            onChange={formik.handleChange}
            error={formik.touched.usuario && Boolean(formik.errors.usuario)}
            helperText={formik.touched.usuario && formik.errors.usuario}
          />
        </Box>
        <Box mt={2}>
        <TextField
          fullWidth
          id="senha"
          name="senha"
          label="Senha"
          type="password"
          value={formik.values.senha}
          onChange={formik.handleChange}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
          helperText={formik.touched.senha && formik.errors.senha}
        />
        </Box>
        <Box mt={2}>
          <Button color="primary" variant="contained" type="submit">Login</Button>
        </Box>
      </form>
      </Box>
    </Container>
  );
}

export default App;
