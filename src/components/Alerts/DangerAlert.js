function DangerAlert() {
    return (
        <div className="alert alert-dismissible alert-danger">
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        <strong>Oh snap!</strong>  and try submitting again.
      </div>
    );
  }
  
  export default DangerAlert;