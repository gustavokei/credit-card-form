import React, { useContext, useEffect } from "react";
import s from "../../../styles/CreditCardForm/Form/Form.module.scss";
import { useFormik } from "formik";
import { Context } from "../../Context";
import * as yup from "yup";
import { TextField, MenuItem, Button } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import axios from "axios";

const cardNoMask = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        " ",
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        " ",
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        " ",
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
        /[1-9]/,
      ]}
      placeholderChar={"\u2000"}
    />
  );
};

const cvvMask = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /[1-9]/, /[1-9]/]}
      placeholderChar={"\u2000"}
    />
  );
};

const expiryDateMask = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /[1-9]/, "/", /[1-9]/, /[1-9]/]}
      placeholderChar={"\u2000"}
    />
  );
};

const Form = () => {
  const {
    paymentInfo,
    setPaymentInfo,
    setShowCreditCardFront,
    setFlipCreditCard,
    setCardType,
  } = useContext(Context);

  const showFront = () => {
    setFlipCreditCard(false);
    setTimeout(() => {
      setShowCreditCardFront(true);
    }, 200);
  };
  const showBack = () => {
    setFlipCreditCard(true);
    setTimeout(() => {
      setShowCreditCardFront(false);
    }, 200);
  };

  const formik = useFormik({
    initialValues: paymentInfo,
    validationSchema: yup.object({
      cardNo: yup
        .string()
        .matches(/\d{4} *\d{4} *\d{4} *\d{4}/, "N??mero de cart??o inv??lido")
        .required("N??mero de cart??o inv??lido"),
      name: yup.string().required("Insira seu nome completo"),
      // Credit Card Date - https://regex101.com/library/AFarfB
      expiryDate: yup
        .string()
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Data inv??lida")
        .required("Data inv??lida"),
      cvv: yup
        .string()
        .matches(/^[0-9]{3,4}/, "C??digo inv??lido")
        .required("C??digo inv??lido"),
      installments: yup
        .number()
        .min(1, "Insira o n??mero de parcelas")
        .max(3, "Insira o n??mero de parcelas")
        .required("Insira o n??mero de parcelas"),
    }),
    onSubmit: (values) => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", values)
        .then((res) => {
          alert("Pagamento realizado com sucesso");
        })
        .catch((err) => {
          alert("Ocorreu um erro");
        });
    },
  });

  useEffect(() => {
    setPaymentInfo(formik.values);
    if (/\d{4} *\d{4} *\d{4} *\d{4}/.test(formik.values.cardNo)) {
      setCardType("visa");
    } else {
      setCardType(null);
    }
  }, [formik.values]);

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <TextField
        InputProps={{
          inputComponent: cardNoMask,
        }}
        className={s.field}
        fullWidth
        id="cardNo"
        name="cardNo"
        label="N??mero do cart??o"
        value={formik.values.cardNo}
        onChange={formik.handleChange}
        error={formik.touched.cardNo && Boolean(formik.errors.cardNo)}
        helperText={formik.touched.cardNo && formik.errors.cardNo}
        onFocus={() => showFront()}
        onClick={() => showFront()}
      />
      <TextField
        className={s.field}
        fullWidth
        id="name"
        name="name"
        label="Nome (igual ao cart??o)"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        onFocus={() => showFront()}
        onClick={() => showFront()}
      />
      <div className={`flex ${s.halfWidth}`}>
        <TextField
          InputProps={{
            inputComponent: expiryDateMask,
          }}
          className={s.field}
          id="expiryDate"
          name="expiryDate"
          label="Validade"
          value={formik.values.expiryDate}
          onChange={formik.handleChange}
          error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
          helperText={formik.touched.expiryDate && formik.errors.expiryDate}
          onFocus={() => showFront()}
          onClick={() => showFront()}
        />
        <TextField
          InputProps={{
            inputComponent: cvvMask,
          }}
          className={s.field}
          id="cvv"
          name="cvv"
          label="CVV"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          error={formik.touched.cvv && Boolean(formik.errors.cvv)}
          helperText={formik.touched.cvv && formik.errors.cvv}
          onFocus={() => showBack()}
          onClick={() => showBack()}
        />
      </div>
      <TextField
        className={s.field}
        fullWidth
        select
        id="installments"
        name="installments"
        label="N??mero de parcelas"
        type="number"
        value={formik.values.installments}
        onChange={formik.handleChange}
        error={
          formik.touched.installments && Boolean(formik.errors.installments)
        }
        helperText={formik.touched.installments && formik.errors.installments}
        onFocus={() => showFront()}
        onClick={() => showFront()}
      >
        <MenuItem value={1}>1x R$1.000,00 sem juros</MenuItem>
        <MenuItem value={2}>2x R$500,00 sem juros</MenuItem>
        <MenuItem value={3}>3x R$333,33 sem juros</MenuItem>
      </TextField>

      <Button
        className={`sf-semibold ${s.button}`}
        color="primary"
        variant="contained"
        type="submit"
      >
        <span className={`sf-semibold ${s.buttonText}`}>Continuar</span>
      </Button>
    </form>
  );
};

export default Form;
