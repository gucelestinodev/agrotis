import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import SelectButton from '../SelectButton/SelectButton';
import ObservacoesInput from '../ObservacoesInput';
import { Laboratorio, Propriedade, FormData } from '../../types';
import { useFetch } from '../../hooks/useFetch';
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
  const { register, handleSubmit } = useForm<FormData>();
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState<string | null>(null);
  const [propriedadeSelecionada, setPropriedadeSelecionada] = useState<string | null>(null);
  const [propriedadeAberta, setPropriedadeAberta] = useState(false);
  const [laboratorioAberto, setLaboratorioAberta] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const { data: laboratorios, error: errorLaboratorios, isLoading: isLoadingLaboratorios } = useFetch<Laboratorio[]>('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json');
  const { data: propriedades, error: errorPropriedades, isLoading: isLoadingPropriedades } = useFetch<Propriedade[]>('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json');

  const handleOptionSelect = (tipo: string, nome: string) => {
    if (tipo === 'propriedade') {
      setPropriedadeSelecionada(nome);
      setPropriedadeAberta(false);
    } else if (tipo === 'laboratorio') {
      setLaboratorioSelecionado(nome);
      setLaboratorioAberta(false);
    }
  };

  const handleClearSelection = (tipo: string) => {
    if (tipo === 'propriedade') {
      setPropriedadeSelecionada(null);
    } else if (tipo === 'laboratorio') {
      setLaboratorioSelecionado(null);
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
    const payload = {
      nome: data.nome,
      dataInicial: data.dataInicial,
      dataFinal: data.dataFinal,
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
  };

  return (
    <Container>
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
            />
            <DateContainer>
              <DateInput label="Data Inicial" info="dataInicial" register={register} required />
              <Separator />
              <DateInput label="Data Final" info="dataFinal" register={register} required />
            </DateContainer>
          </FieldsWrapper>
          <SelectContainer>
            <SelectButton
              label="Propriedades *"
              value={propriedadeSelecionada}
              onSelectClick={() => setPropriedadeAberta(!propriedadeAberta)}
              cnpj={propriedadeSelecionada ? propriedades?.find(prop => prop.nome === propriedadeSelecionada)?.cnpj : null}
              onClearSelection={() => handleClearSelection('propriedade')}
            />
            <SelectButton
              label="Laboratórios *"
              value={laboratorioSelecionado}
              onSelectClick={() => setLaboratorioAberta(!laboratorioAberto)}
              cnpj={null}
              onClearSelection={() => handleClearSelection('laboratorio')}
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
