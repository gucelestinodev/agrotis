import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import SelectButton from '../SelectButton/SelectButton';
import ObservacoesInput from '../ObservacoesInput';
import { Laboratorio, Propriedade, FormData } from '../../types';
import { fetchLaboratorios, fetchPropriedades } from '../../services/api';
import { useFetch } from '../../hooks/useFetch';
import ModalSuccess from '../Modal/ModalSuccess/ModalSuccess'
import {
  Container,
  DateContainer,
  FormCard,
  FormTitle,
  SelectContainer,
  FieldsWrapper,
  InfoTitle,
  ButtonSave,
  Separator,
  DualSelectContainer,
  OptionsWrapper,
  Button,
  CnpjText,
  LoadingOverlay,
} from './FormularioStyles';
import ErrorModal from '../Modal/ModalError';

const Formulario: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm<FormData>({
    defaultValues: {
      nome: '',
      dataInicial: '',
      dataFinal: '',
      observacoes: '',
    },
    mode: 'onSubmit',
  });

  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState<string | null>(null);
  const [propriedadeSelecionada, setPropriedadeSelecionada] = useState<string | null>(null);
  const [propriedadeAberta, setPropriedadeAberta] = useState(false);
  const [laboratorioAberto, setLaboratorioAberta] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const {
    data: laboratorios,
    error: errorLaboratorios,
    isLoading: isLoadingLaboratorios
  } = useFetch<Laboratorio[]>(fetchLaboratorios);

  const {
    data: propriedades,
    error: errorPropriedades,
    isLoading:
    isLoadingPropriedades
  } = useFetch<Propriedade[]>(fetchPropriedades);

  const handleOptionSelect = (tipo: string, nome: string) => {
    if (tipo === 'propriedade') {
      setPropriedadeSelecionada(nome);
      setPropriedadeAberta(false);
      clearErrors('propriedade');
    } else if (tipo === 'laboratorio') {
      setLaboratorioSelecionado(nome);
      setLaboratorioAberta(false);
      clearErrors('laboratorio');
    }
  };


  const handleClearSelection = (tipo: string) => {
    if (tipo === 'propriedade') {
      setPropriedadeSelecionada(null);
      setError('propriedade', { type: 'manual' });
    } else if (tipo === 'laboratorio') {
      setLaboratorioSelecionado(null);
      setError('laboratorio', { type: 'manual' });
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (errorLaboratorios || errorPropriedades) {
      setShowErrorModal(true);
    }
  }, [errorLaboratorios, errorPropriedades]);

  const onSubmit = (data: FormData) => {

    if (data.dataInicial && data.dataFinal) {
      const dataInicial = new Date(data.dataInicial);
      const dataFinal = new Date(data.dataFinal);

      if (dataInicial > dataFinal) {
        setError('dataFinal', { type: 'manual', message: 'A data final não pode ser menor à data inicial.' });
        return;
      }
    }

    if (!propriedadeSelecionada) {
      setError('propriedade', { type: 'manual' });
      return;
    }
    if (!laboratorioSelecionado) {
      setError('laboratorio', { type: 'manual' });
      return;
    }

    const payload = {
      nome: data.nome,
      dataInicial: new Date(data.dataInicial).toISOString(),
      dataFinal: new Date(data.dataFinal).toISOString(),
      infosPropriedade: {
        id: propriedades?.find(prop => prop.nome === propriedadeSelecionada)?.id,
        nome: propriedadeSelecionada,
      },
      cnpj: propriedades?.find(prop => prop.nome === propriedadeSelecionada)?.cnpj,
      laboratorio: {
        id: laboratorios?.find(lab => lab.nome === laboratorioSelecionado)?.id,
        nome: laboratorioSelecionado,
      },
      observacoes: data.observacoes,
    };

    console.log(payload);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1000);
  };

  return (
    <Container>
      <ModalSuccess isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      {showErrorModal && (
        <ErrorModal onRetry={handleRetry} onClose={() => setShowErrorModal(false)} />
      )}
      {isLoadingLaboratorios || isLoadingPropriedades ? (
        <LoadingOverlay color="#006F59" />
      ) : (
        <FormCard>
          <InfoTitle>
            <FormTitle>Teste front-end</FormTitle>
            <ButtonSave onClick={handleSubmit(onSubmit)}>Salvar</ButtonSave>
          </InfoTitle>
          <FieldsWrapper>
            <TextInput
              label="Nome"
              register={register}
              required={true}
              info="nome"
              errorMessage={errors.nome?.message}
            />
            <DateContainer>
              <DateInput
                label="Data Inicial"
                info="dataInicial"
                register={register}
                required
                errorMessage={errors.dataInicial?.message}
              />
              <Separator />
              <DateInput
                label="Data Final"
                info="dataFinal"
                register={register}
                required
                errorMessage={errors.dataFinal?.message}
              />
            </DateContainer>
          </FieldsWrapper>
          <SelectContainer>
            <SelectButton
              label="Propriedades *"
              value={propriedadeSelecionada}
              onSelectClick={() => setPropriedadeAberta(!propriedadeAberta)}
              cnpj={propriedadeSelecionada ? propriedades?.find(prop => prop.nome === propriedadeSelecionada)?.cnpj : null}
              onClearSelection={() => handleClearSelection('propriedade')}
              error={!!errors.propriedade}
            />
            <SelectButton
              label="Laboratórios *"
              value={laboratorioSelecionado}
              onSelectClick={() => setLaboratorioAberta(!laboratorioAberto)}
              cnpj={null}
              onClearSelection={() => handleClearSelection('laboratorio')}
              error={!!errors.laboratorio}
            />
          </SelectContainer>
          <FieldsWrapper>
            <ObservacoesInput
              label="Observações"
              info="observacoes"
              register={register}
            />
          </FieldsWrapper>
        </FormCard>
      )}
      <DualSelectContainer>
        {propriedadeAberta && (
          <OptionsWrapper>
            {propriedades?.map((prop) => (
              <Button key={prop.id} onClick={() => handleOptionSelect('propriedade', prop.nome)} size="small">
                <div>
                  {prop.nome}
                  <CnpjText>{prop.cnpj}</CnpjText>
                </div>
              </Button>
            ))}
          </OptionsWrapper>
        )}
        {laboratorioAberto && (
          <OptionsWrapper>
            {laboratorios?.map((lab) => (
              <Button key={lab.id} onClick={() => handleOptionSelect('laboratorio', lab.nome)} size="large">
                {lab.nome}
              </Button>
            ))}
          </OptionsWrapper>
        )}
      </DualSelectContainer>
    </Container>
  );
};

export default Formulario;
