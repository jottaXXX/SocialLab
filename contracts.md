# SocialLab - Contratos de API e Integração Backend

## 1. Dados Mockados no Frontend (mockData.js)

### Hero Section
- `hero.headline`, `hero.subheadline`, `hero.ctaText`, `hero.backgroundImage`

### Serviços
- Array de `services` com: `id`, `title`, `description`, `icon`, `image`, `bgColor`

### Depoimentos
- Array de `testimonials` com: `id`, `name`, `feedback`, `company`, `rating`

### Equipe
- Array de `team` com: `id`, `name`, `role`, `photo`, `bio`

### Contato
- Objeto `contact` com: `email`, `phone`, `address`
- Objeto `socialMedia` com: `instagram`, `linkedin`, `facebook`

## 2. API Endpoints Necessários

### 2.1 Formulário de Contato (POST /api/contact)
**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "service": "string (optional)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso",
  "id": "contact_id"
}
```

### 2.2 Integração com Email Service
- Enviar email de notificação para a SocialLab quando formulário for submetido
- Enviar email de confirmação para o cliente
- **Integração necessária**: Definir serviço de email (SendGrid, Nodemailer, etc.)

### 2.3 Dados Dinâmicos (GET endpoints)
- GET /api/services - Lista de serviços
- GET /api/testimonials - Depoimentos
- GET /api/team - Equipe
- GET /api/contact-info - Informações de contato

### 2.4 Integração com Redes Sociais
- Links para redes sociais (já implementado no frontend)
- Possível integração futura com APIs das redes sociais para feeds dinâmicos

## 3. Modelos MongoDB

### Contact Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  company: String,
  service: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'contacted', 'converted'
}
```

### Service Model (opcional - dados podem ser estáticos)
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  icon: String,
  image: String,
  bgColor: String,
  features: [String],
  pricing: String,
  isActive: Boolean
}
```

## 4. Integração Frontend ↔ Backend

### 4.1 Remover Mock Data
- Substituir importações de `mockData.js` por chamadas API
- Implementar estados de loading e error handling
- Manter fallbacks para dados essenciais

### 4.2 Formulário de Contato
- Conectar `Contact.jsx` handleSubmit com API
- Implementar validação backend
- Mostrar feedback visual (success/error)
- Adicionar captcha se necessário

### 4.3 Estados de Loading
- Implementar skeletons para carregamento de dados
- Error boundaries para tratamento de erros
- Retry mechanisms para falhas de rede

## 5. Integrações Externas Necessárias

### 5.1 Email Service
- **Recomendado**: SendGrid ou Nodemailer com SMTP
- Templates de email para notificações
- Rate limiting para evitar spam

### 5.2 Redes Sociais (futuro)
- Instagram API para feed de posts
- LinkedIn API para postagens da empresa
- Facebook API para métricas

## 6. Validações e Segurança

### 6.1 Backend Validations
- Email format validation
- Rate limiting por IP
- Sanitização de inputs
- CORS configurado corretamente

### 6.2 Frontend Validations
- Validação de formulários em tempo real
- Mensagens de erro user-friendly
- Prevenção de múltiplos submits

## 7. Próximos Passos de Implementação

1. **Criar modelos MongoDB** para Contact
2. **Implementar endpoint POST /api/contact** com validações
3. **Configurar serviço de email** (decidir qual usar)
4. **Substituir mockData** por calls de API no frontend
5. **Testar integração completa** frontend ↔ backend
6. **Implementar error handling** e loading states
7. **Configurar rate limiting** e segurança

## 8. Variáveis de Ambiente Necessárias

```env
# Email Service
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=contato@sociallab.com

# MongoDB
MONGO_URL=already_configured

# Frontend
REACT_APP_BACKEND_URL=already_configured
```

Este documento serve como protocolo para implementação backend sem quebrar o frontend existente e garantir integração suave.