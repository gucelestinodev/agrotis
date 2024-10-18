import React, { useState, useEffect } from 'react';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import SelectInput from '../SelectInput';
import ObservacoesInput from '../ObservacoesInput';
import axios from 'axios';
import { Laboratorio, Propriedade } from '../../types';
import { Container, DateContainer, FormCard, FormTitle, FieldsWrapper, ButtonWrapper, Button } from './FormularioStyles';


const Formulario: React.FC = () => {
  const [nome, setNome] = useState('');
  // const [dataInicial, setDataInicial] = useState<Date | null>(null);
  // const [dataFinal, setDataFinal] = useState<Date | null>(null);
  const [observacoes, setObservacoes] = useState('');
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([]);
  const [propriedades, setPropriedades] = useState<Propriedade[]>([]);
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState<number | null>(null);
  const [propriedadeSelecionada, setPropriedadeSelecionada] = useState<number | null>(null);

  useEffect(() => {
    axios.get('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json')
      .then(response => setLaboratorios(response.data));

    axios.get('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json')
      .then(response => setPropriedades(response.data));
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const dados = {
  //     nome,
  //     // dataInicial,
  //     // dataFinal,
  //     laboratorioId: laboratorioSelecionado,
  //     propriedadeId: propriedadeSelecionada,
  //     observacoes,
  //   };
  //   console.log(dados);
  // };

  return (
    <Container>
      <FormCard>
        <ButtonWrapper>
          <FormTitle>Teste front-end</FormTitle>
          <Button>
            Salvar
          </Button>
        </ButtonWrapper>
        <FieldsWrapper>
          <TextInput label="Nome *" value={nome} onChange={(e) => setNome(e.target.value)} />
          <DateContainer>
            <DateInput label="Data Inicial *" />
            <DateInput label="Data Final *" />
          </DateContainer>
        </FieldsWrapper>
        <FieldsWrapper>
          <SelectInput label="Propriedades *" options={propriedades} value={propriedadeSelecionada} onChange={(e) => setPropriedadeSelecionada(e.target.value as number)} />
          <SelectInput label="Laboratórios *" options={laboratorios} value={laboratorioSelecionado} onChange={(e) => setLaboratorioSelecionado(e.target.value as number)} />
        </FieldsWrapper>
        <FieldsWrapper>
          <ObservacoesInput value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
        </FieldsWrapper>
      </FormCard>
    </Container>
  );
};

export default Formulario;
