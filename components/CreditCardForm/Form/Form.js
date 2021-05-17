import React, { useContext, useEffect } from "react";
import s from "../../../styles/CreditCardForm/Form/Form.module.scss";
import { useFormik } from "formik";
import { Context } from "../../Context";
import * as yup from "yup";
import { TextField, MenuItem, Button } from "@material-ui/core";
import MaskedInput from "react-text-mask";

const TextMask = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /[1-9]/, "/", /[1-9]/, /[1-9]/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

const Form = () => {
  const {
    paymentInfo,
    setPaymentInfo,
    setShowCreditCardFront,
    setFlipCreditCard,
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
        .min(16, "Número de cartão inválido")
        .max(16, "Número de cartão inválido")
        .required("Número de cartão inválido"),
      name: yup.string().required("Insira seu nome completo"),
      // Credit Card Date - https://regex101.com/library/AFarfB
      expiryDate: yup
        .string()
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Data inválida")
        .required("Data inválida"),
      cvv: yup
        .number()
        .min(3, "Código inválido")
        .max(3, "Código inválido")
        .required("Código inválido"),
      installments: yup
        .number()
        .min(1, "Insira o número de parcelas")
        .max(3, "Insira o número de parcelas")
        .required("Insira o número de parcelas"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    setPaymentInfo(formik.values);
  }, [formik.values]);

  useEffect(() => {
    console.log(paymentInfo);
  }, [paymentInfo]);

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <TextField
        className={s.field}
        fullWidth
        id="cardNo"
        name="cardNo"
        label="Número do cartão"
        type="number"
        value={formik.values.cardNo}
        onChange={formik.handleChange}
        error={formik.touched.cardNo && Boolean(formik.errors.cardNo)}
        helperText={formik.touched.cardNo && formik.errors.cardNo}
        onClick={() => showFront()}
      />
      <TextField
        className={s.field}
        fullWidth
        id="name"
        name="name"
        label="Nome (igual ao cartão)"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        onClick={() => showFront()}
      />
      <div className={`flex ${s.halfWidth}`}>
        <TextField
          InputProps={{
            inputComponent: TextMask,
          }}
          className={s.field}
          id="expiryDate"
          name="expiryDate"
          label="Validade"
          value={formik.values.expiryDate}
          onChange={formik.handleChange}
          error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
          helperText={formik.touched.expiryDate && formik.errors.expiryDate}
          onClick={() => showFront()}
        />
        <TextField
          className={s.field}
          id="cvv"
          name="cvv"
          label="CVV"
          type="number"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          error={formik.touched.cvv && Boolean(formik.errors.cvv)}
          helperText={formik.touched.cvv && formik.errors.cvv}
          onClick={() => showBack()}
        />
      </div>
      <TextField
        className={s.field}
        fullWidth
        select
        id="installments"
        name="installments"
        label="Número de parcelas"
        type="number"
        value={formik.values.installments}
        onChange={formik.handleChange}
        error={
          formik.touched.installments && Boolean(formik.errors.installments)
        }
        helperText={formik.touched.installments && formik.errors.installments}
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
