import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MobileStepper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import { useTheme } from '@mui/material/styles';

import './Questions.css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const Questions = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const nextStep = () => {
    if (activeStep < 7) setActiveStep((currentStep) => currentStep + 1);
  };

  const previousStep = () => {
    if (activeStep !== 0) setActiveStep((currentStep) => currentStep - 1);
  };

  return (
    <div className="Questions">
      <h1 className="Questions__title">Questions</h1>
      <div className="Questions__container">
        <MobileStepper
          style={{
            backgroundColor: '#24252a',
            color: 'white',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
          variant="text"
          steps={8}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={nextStep}
              disabled={activeStep === 7}
              color="warning"
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={previousStep}
              disabled={activeStep === 0}
              color="warning"
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <Stepper orientation="vertical" activeStep={activeStep}>
          <Step color="warning">
            <StepLabel>
              <Typography variant="h6">
                1. ¿Cuáles son las ceremonias más importantes de un Sprint y
                cuál es la idea de cada una?
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>
                <b>Sprint Planning.</b>
                <br />
                La idea es reunirse al comienzo de cada sprint junto al Product
                Onwer y el Team Scrum donde se podrá planear que ítems del
                Product Backlog se intentarán convertir en un producto
                funcionando durante dicho Sprint.
                <br />
                <b>Daily Scrum.</b>
                <br />
                La idea es que cada día, a la misma hora y en el mismo lugar
                todos los miembros del equipo de desarrollo puedan hacer un
                reporte en donde se resume lo que se hizo el día anterior, lo
                que se hará el día de hoy y los impedimentos que está
                enfrentando, por lo general las Daily Scrum tienen una duración
                de 15 minutos.
                <br />
                <b>Sprint Review.</b>
                <br />
                Es una demostración en vivo en donde se muestra el incremento
                del producto al Product Owner y a los interesados, posterior a
                ello, el Product Owner declara que ítems fueron terminados.
                <br />
                <b>Sprint Retrospective.</b>
                <br />
                Es una reunión que se realiza al término de cada sprint y es
                donde se reflexiona sobre el proceso que han desarrollado en el
                sprint, inspeccionan su comportamiento y además toman medidas
                para que puedan adaptarlas en futuros sprints.
                <br />
                <b>Refinamiento del Backlog.</b>
                <br />
                Es una reunión que se da con el propósito de poder refinar los
                PBIs ya que en la mayoría de veces, estas son grandes e
                incomprendidos. En esta reunión el equipo estima la cantidad de
                esfuerzo que debe invertirse para completos los ítems del
                Backlog del Producto y proporciona la información técnica para
                ayudar al PO a priorizarlos.
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">
                2. ¿Qué son los Wireframes? Nombra al menos una herramienta que
                podamos utilizar.
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>
                Es un boceto donde se representa visualmente, de manera sencilla
                y de baja fidelidad la estructura que tomará una página web.
                Tiene como objetivo definir el contenido y posición de diversos
                bloques en la página web.
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">
                3. Explicar la diferencia entre{' '}
                <span className="span__red">var</span> ,{' '}
                <span className="span__red">let</span> y{' '}
                <span className="span__red">const</span>. Y dar un ejemplo en
                qué caso se utilizará.
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>
                <b>
                  <span className="span__red">var</span>:{' '}
                </b>{' '}
                Puede ser redeclarado y reasignado, está hoisted e inicializado
                a Undefined, no le importa el block scope, contamina el global
                scopre.
                <br />
                <b>
                  <span className="span__red">let</span>:{' '}
                </b>{' '}
                No puede ser redeclarado pero si redefinido, está hoisted pero
                no inicializado, usa block scope, no contamina el global scope.
                <br />
                <b>
                  <span className="span__red">const</span>:{' '}
                </b>{' '}
                No puede ser redeclarado o reasignado, debe ser inicializado
                cuando se declara, está hoisted pero no se inicializa, usa block
                scope, los valores se pueden cambiar en objetos, agregar,
                modificar y quitar elementos en un array.
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">
                4. ¿Cuáles son los tres comandos que se pueden utilizar para
                crear una nueva rama llamada rama-1?
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography fontFamily="comic">
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Filter1Icon />
                    </ListItemIcon>
                    <ListItemText>git checkout -b rama-1</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Filter2Icon />
                    </ListItemIcon>
                    <ListItemText>git branch rama-1</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Filter3Icon />
                    </ListItemIcon>
                    <ListItemText>git switch -c rama-1</ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">
                5. Explicar la diferencia entre git merge y git rebase.
              </Typography>
            </StepLabel>
            <StepContent>
              <List>
                <ListItem>
                  <ListItemText>
                    El git rebase genera una serie de commits secuencialmente,
                    de modo que puedan aplicarse directamente sobre la cabeza
                    del nodo.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    El git merge Une dos o más historiales de desarrollo, junta
                    el historial de una rama en la que estás trabajando.
                  </ListItemText>
                </ListItem>
              </List>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">
                6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando
                git pull?
              </Typography>
            </StepLabel>
            <StepContent>
              <List>
                <ListItem>
                  <ListItemText>
                    El Pull Request es una petición que se hace al propietario
                    del repositorio original para que este pueda incorporar los
                    commits que están en dicha petición.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    El Git Pull es utilizado para extraer y descargar contenido
                    desde un repositorio remoto y actualizar el repositorio
                    local para reflejar dicho contenido.
                  </ListItemText>
                </ListItem>
              </List>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">7. ¿Qué es el Virtual DOM?</Typography>
            </StepLabel>
            <StepContent>
              <Typography>
                Es la representación del DOM guardada en memoria, esta actúa de
                intermediario entre los estados de la aplicación y los estados
                del DOM. Cuando ocurre un cambio en la aplicación web, el
                virtual DOM interpreta dichos cambios y calcula la manera más
                eficiente de actualizar el DOM para que renderice la menor
                cantidad de cambios posibles.
              </Typography>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <Typography variant="h6">
                8. Dado el siguiente codePen, el cual solo tiene un HTML, por
                medio de css llegar a esta respuesta. Imagen. (Para mostrar los
                servicios debes usar CSS Flexbox o CSS Grid).
              </Typography>
            </StepLabel>
            <StepContent>
              <a
                href="https://codepen.io/worer/pen/MWEvaaV"
                target="_blank"
                rel="noreferrer"
              >
                Codepen Link
              </a>
            </StepContent>
          </Step>
        </Stepper>
      </div>
      <br />
    </div>
  );
};

export default Questions;
