export default function Details({ photo }) {
  return (
    <div className={!photo && "hide"}>
      <div className="form">
        <div className="content">
          <div className="input-field">
            <label htmlFor="url">Image URL</label>
            <input type="text" id="url" value={photo?.url} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Post description</label>
            <textarea type="text" id="description" />
          </div>
          <div className="form-row">
            <div className="input-field">
              <label htmlFor="date">Publish date</label>
              <input type="date" id="date" />
            </div>
            <div className="input-field">
              <label htmlFor="time">Publish time</label>
              <input type="time" id="time" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn-error">
            Eliminar
          </button>
          <button type="button" className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}
