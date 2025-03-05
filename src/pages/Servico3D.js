import React, { useState } from 'react';
import './Servico3D.css';

const Servico3D = () => {
  const [order, setOrder] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null,
    quantity: 1,
  });

  // Preços e cálculos
  const filamentCostPerGram = 0.20; // R$0.20 por grama
  const maintenanceFee = 15.00; // Taxa fixa por impressão
  const [estimatedFilament, setEstimatedFilament] = useState(0);

  const calculatePrice = () => {
    return (estimatedFilament * filamentCostPerGram + maintenanceFee) * formData.quantity;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Simulação de cálculo de filamento baseado no tamanho do arquivo
    setEstimatedFilament(Math.round(file.size / 1024)); // Exemplo simplificado
    setFormData({...formData, file});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envio do formulário
    setOrder({
      ...formData,
      status: 'pending_payment',
      price: calculatePrice(),
      orderNumber: Math.floor(Math.random() * 1000000),
    });
  };

  const handlePayment = () => {
    setOrder({...order, status: 'in_production', paymentDate: new Date().toLocaleDateString()});
  };

  return (
    <div className="servico3d-container">
      <h1>Serviço de Impressão 3D</h1>
      
      <div className="service-description">
        <p>Imprimimos seus arquivos 3D com qualidade profissional!</p>
        <div className="pricing-info">
          <h2>Como funciona o preço:</h2>
          <ul>
            <li>Custo de filamento: R${filamentCostPerGram.toFixed(2)}/grama</li>
            <li>Taxa de manutenção: R${maintenanceFee.toFixed(2)} por impressão</li>
            <li>Prazo de entrega: 3-5 dias úteis após confirmação de pagamento</li>
          </ul>
        </div>
      </div>

      {!order ? (
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label>Nome completo:</label>
            <input 
              type="text" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Arquivo 3D (STL):</label>
            <input 
              type="file" 
              accept=".stl" 
              required 
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label>Quantidade:</label>
            <input 
              type="number" 
              min="1" 
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
          </div>

          <div className="price-estimate">
            <h3>Estimativa de custo:</h3>
            <p>Filamento estimado: {estimatedFilament}g</p>
            <p>Total: R${calculatePrice().toFixed(2)}</p>
          </div>

          <button type="submit">Solicitar Orçamento</button>
        </form>
      ) : (
        <div className="order-status">
          <h2>Status do Pedido #{order.orderNumber}</h2>
          
          <div className="status-steps">
            <div className={`status-item ${order.status === 'pending_payment' ? 'active' : ''}`}>
              1. Aguardando Pagamento
            </div>
            <div className={`status-item ${order.status === 'in_production' ? 'active' : ''}`}>
              2. Em Produção
            </div>
            <div className={`status-item ${order.status === 'completed' ? 'active' : ''}`}>
              3. Concluído
            </div>
          </div>
          

          {order.status === 'pending_payment' && (
            <div className="payment-section">
              <p>Total a pagar: R${order.price.toFixed(2)}</p>
              <button onClick={handlePayment}>Simular Pagamento</button>
              <p className="payment-info">
                O prazo de produção começará a contar após a confirmação do pagamento.
              </p>
            </div>
          )}

          {order.status === 'in_production' && (
            <div className="production-info">
              <p>Status atual: Sua peça está sendo impressa</p>
              <p>Data prevista de entrega: {new Date(Date.now() + 5*24*60*60*1000).toLocaleDateString()}</p>
              <div className="progress-bar">
                <div className="progress" style={{width: '60%'}}></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Servico3D;