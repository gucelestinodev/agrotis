import React, { useState, useEffect } from 'react';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import SelectButton from '../SelectButton/SelectButton';
import ObservacoesInput from '../ObservacoesInput';
import axios from 'axios';
import { Laboratorio, Propriedade } from '../../types';
import { Container, DateContainer, FormCard, FormTitle, SelectContainer, FieldsWrapper, InfoTitle, ButtonSave, Button, Separator, OptionsWrapper, DualSelectContainer, CnpjText } from './FormularioStyles';

const Formulario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([]);
  const [propriedades, setPropriedades] = useState<Propriedade[]>([]);
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState<string | null>(null);
  const [propriedadeSelecionada, setPropriedadeSelecionada] = useState<string | null>(null);
  const [propriedadeAberta, setPropriedadeAberta] = useState(false);
  const [laboratorioAberto, setLaboratorioAberto] = useState(false);

  useEffect(() => {
    axios.get('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json')
      .then(response => setLaboratorios(response.data));

    axios.get('https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json')
      .then(response => setPropriedades(response.data));
  }, []);

  const handleOptionSelect = (tipo: string, nome: string) => {
    if (tipo === 'propriedade') {
      setPropriedadeSelecionada(nome);
      setPropriedadeAberta(false);
    } else if (tipo === 'laboratorio') {
      setLaboratorioSelecionado(nome);
      setLaboratorioAberto(false);
    }
  };

  const handleClearSelection = (tipo: string) => {
    if (tipo === 'propriedade') {
      setPropriedadeSelecionada(null);
    } else if (tipo === 'laboratorio') {
      setLaboratorioSelecionado(null);
    }
  };

  return (
    <Container>
      <FormCard>
        <InfoTitle>
          <FormTitle>Teste front-end</FormTitle>
          <ButtonSave>Salvar</ButtonSave>
        </InfoTitle>
        <FieldsWrapper>
          <TextInput label="Nome *" value={nome} onChange={(e) => setNome(e.target.value)} />
          <DateContainer>
            <DateInput label="Data Inicial *" />
            <Separator />
            <DateInput label="Data Final *" />
          </DateContainer>
        </FieldsWrapper>
        <SelectContainer>
          <SelectButton
            label="Propriedades *"
            value={propriedadeSelecionada}
            onSelectClick={() => setPropriedadeAberta(!propriedadeAberta)}
            cnpj={propriedadeSelecionada ? propriedades.find(prop => prop.nome === propriedadeSelecionada)?.cnpj : null}
            onClearSelection={() => handleClearSelection('propriedade')}
          />
          <SelectButton
            label="Laboratórios *"
            value={laboratorioSelecionado}
            onSelectClick={() => setLaboratorioAberto(!laboratorioAberto)}
            cnpj={laboratorioSelecionado ? propriedades.find(prop => prop.nome === laboratorioSelecionado)?.cnpj : null}
            onClearSelection={() => handleClearSelection('laboratorio')}
          />
        </SelectContainer>

        <FieldsWrapper>
          <ObservacoesInput value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
        </FieldsWrapper>
      </FormCard>
      <DualSelectContainer>
        {propriedadeAberta && (
          <OptionsWrapper>
            {propriedades.map((prop) => (
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
            {laboratorios.map((lab) => (
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
