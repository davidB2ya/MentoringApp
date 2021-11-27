import './formmentor.css'

function FormMentor () {
  return (
    <div className='container-Q'>
      <div className='containerList'>
        <p>Estudios</p>
        <input></input>
        <p>Cargo actual</p>
        <input></input>
        <p>Empresa en donde trabajas</p>
        <input></input>
        <p>Género</p>
        <input></input>
        <p>Hijos</p>
        <input></input>
        <p>Cantidad de estudiantes que quieres en el proceso</p>
        <input></input>
      </div>
      <div className='interest'>
        <h2>Intereses generales</h2>
        <p>Elige un máximo de tres Intereses</p>
        <div className='list'>
          <p>Intereses</p>
          <div>
            <label className='OPT1'>IA</label>
            <input type='radio'></input>
          </div>
          <div>
            <label className='OPT2'>Diseño</label>
            <input type='radio'></input>
          </div>
          <div>
            <label className='OPT3'>Frontend</label>
            <input type='radio'></input>
          </div>
          <div>
            <label className='OPT4'>Backend</label>
            <input type='radio'></input>
          </div>
          <div>
            <label className='OPT5'>Marketing</label>
            <input type='radio'></input>
          </div>
        </div>
        <button>Finalizar</button>
      </div>
      </div>
  )
}

export default FormMentor
