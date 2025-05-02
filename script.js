const deviceDatabase = {
    'SM-A155M': {
        modelo: 'Galaxy A15',
        variante: 'SM-A155M',
        viaBox: {
            disponivel: true,
            valor: 50.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 90.00,
            aberto: false // Adicionando a propriedade aberto
        }
    },
    'SM-A145M': {
        modelo: 'Galaxy A14',
        variante: 'SM-A145M',
        viaBox: {
            disponivel: true,
            valor: 80.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 150.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 120.00,
            aberto: false
        }
    },
    'SM-A146M': {
        modelo: 'Galaxy A14 5G',
        variante: 'SM-A146M',
        viaBox: {
            disponivel: true,
            valor: 90.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 160.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 130.00,
            aberto: false
        }
    },
    'SM-A346M': {
        modelo: 'Galaxy A34',
        variante: 'SM-A346M',
        viaBox: {
            disponivel: true,
            valor: 100.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 150.00,
            aberto: false
        }
    },
    'SM-A546E': {
        modelo: 'Galaxy A54',
        variante: 'SM-A546E',
        viaBox: {
            disponivel: true,
            valor: 120.00,
            aberto: false
        },
        viaServer: {
            disponivel: true,
            valor: 200.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 170.00,
            aberto: false
        }
    },
    'SM-A055M': {
        modelo: 'Galaxy A05',
        variante: 'SM-A55M',
        viaBox: {
            disponivel: true,
            valor: 50.00,
            aberto: false
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 90.00,
            aberto: false // Adicionando a propriedade aberto
        } 
    },
    'SM-A057M': {
        modelo: 'Galaxy A05S',
        variante: 'SM-A57M',
        viaBox: {
            disponivel: true,
            valor: 50.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 90.00,
            aberto: true // Adicionando a propriedade aberto
        } 
    },
    'SM-A546B': {
        modelo: 'Galaxy A54',
        variante: 'SM-A546B',
        viaBox: {
            disponivel: true,
            valor: 120.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 100.00,
            aberto: false
        }
    },
    'SM-A346B': {
        modelo: 'Galaxy A34',
        variante: 'SM-A346B',
        viaBox: {
            disponivel: true,
            valor: 100.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 90.00,
            aberto: false
        }
    },
    'SM-A236B': {
        modelo: 'Galaxy A23',
        variante: 'SM-A236B',
        viaBox: {
            disponivel: true,
            valor: 80.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 90.00,
            aberto: false
        }
    },
    'SM-A105M': {
        modelo: 'Galaxy A10',
        variante: 'SM-A105M',
        viaBox: {
            disponivel: true,
            valor: 60.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 140.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 80.00,
            aberto: false
        }
    },
    'SM-A107M': {
        modelo: 'Galaxy A10S',
        variante: 'SM-A107M',
        viaBox: {
            disponivel: true,
            valor: 60.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 140.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 80.00,
            aberto: false
        }
    },
    'SM-A115M': {
        modelo: 'Galaxy A11',
        variante: 'SM-A115M',
        viaBox: {
            disponivel: true,
            valor: 65.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 145.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 85.00,
            aberto: false
        }
    },
    'SM-A022M': {
        modelo: 'Galaxy A02',
        variante: 'SM-A022M',
        viaBox: {
            disponivel: true,
            valor: 55.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 135.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 75.00,
            aberto: false
        }
    },
    'SM-A025M': {
        modelo: 'Galaxy A02S',
        variante: 'SM-A025M',
        viaBox: {
            disponivel: true,
            valor: 60.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 140.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 80.00,
            aberto: false
        }
    },
    'SM-A245M': {
        modelo: 'Galaxy A24',
        variante: 'SM-A245M',
        viaBox: {
            disponivel: true,
            valor: 85.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 165.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 95.00,
            aberto: false
        }
    },
    'SM-A225M': {
        modelo: 'Galaxy A22',
        variante: 'SM-A225M',
        viaBox: {
            disponivel: true,
            valor: 75.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 155.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 90.00,
            aberto: false
        }
    },
    'SM-A045M': {
        modelo: 'Galaxy A04',
        variante: 'SM-A045M',
        viaBox: {
            disponivel: true,
            valor: 55.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 135.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 75.00,
            aberto: false
        }
    },
    'SM-A047M': {
        modelo: 'Galaxy A04s',
        variante: 'SM-A047M',
        viaBox: {
            disponivel: true,
            valor: 60.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 140.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 80.00,
            aberto: false
        }
    },
    'SM-A725M': {
        modelo: 'Galaxy A72',
        variante: 'SM-A725M',
        viaBox: {
            disponivel: true,
            valor: 140.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 110.00,
            aberto: false
        }
    },
    'SM-A526B': {
        modelo: 'Galaxy A52',
        variante: 'SM-A526B',
        viaBox: {
            disponivel: true,
            valor: 110.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 170.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 90.00,
            aberto: true
        }
    },
    'SM-A325M': {
        modelo: 'Galaxy A32',
        variante: 'SM-A325M',
        viaBox: {
            disponivel: true,
            valor: 90.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 160.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 80.00,
            aberto: false
        }
    },
    'SM-M526B': {
        modelo: 'Galaxy M52',
        variante: 'SM-M526B',
        viaBox: {
            disponivel: true,
            valor: 100.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 160.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 85.00,
            aberto: false
        }
    },
    'SM-M326B': {
        modelo: 'Galaxy M32',
        variante: 'SM-M326B',
        viaBox: {
            disponivel: true,
            valor: 85.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 150.00,
            aberto: false
        },
        viaImei: {
            disponivel: false,
            valor: 75.00,
            aberto: false
        }
    },
    'SM-N986B': {
        modelo: 'Galaxy Note 20 Ultra',
        variante: 'SM-N986B',
        viaBox: {
            disponivel: true,
            valor: 180.00,
            aberto: false
        },
        viaServer: {
            disponivel: true,
            valor: 230.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 160.00,
            aberto: false
        }
    },
    'SM-N981B': {
        modelo: 'Galaxy Note 20',
        variante: 'SM-N981B',
        viaBox: {
            disponivel: true,
            valor: 170.00,
            aberto: false
        },
        viaServer: {
            disponivel: true,
            valor: 220.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 150.00,
            aberto: false
        }
    },
    'SM-A736B': {
        modelo: 'Galaxy A73 5G',
        variante: 'SM-A736B',
        viaBox: {
            disponivel: true,
            valor: 150.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 200.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 120.00,
            aberto: false
        }
    },
    'SM-A715F': {
        modelo: 'Galaxy A71',
        variante: 'SM-A715F',
        viaBox: {
            disponivel: true,
            valor: 130.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 190.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 110.00,
            aberto: false
        }
    },
    'SM-A716B': {
        modelo: 'Galaxy A71 5G',
        variante: 'SM-A716B',
        viaBox: {
            disponivel: true,
            valor: 140.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 195.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 115.00,
            aberto: false
        }
    },
    'SM-A705FN': {
        modelo: 'Galaxy A70',
        variante: 'SM-A705FN',
        viaBox: {
            disponivel: true,
            valor: 120.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 185.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 100.00,
            aberto: false
        }
    },
    'SM-A707F': {
        modelo: 'Galaxy A70s',
        variante: 'SM-A707F',
        viaBox: {
            disponivel: true,
            valor: 125.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 188.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 105.00,
            aberto: false
        }
    },
    'SM-A750F': {
        modelo: 'Galaxy A7 2018',
        variante: 'SM-A750F',
        viaBox: {
            disponivel: true,
            valor: 100.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 170.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 90.00,
            aberto: false
        }
    },
    'SM-A720S': {
        modelo: 'Galaxy A7 2017',
        variante: 'SM-A720S',
        viaBox: {
            disponivel: true,
            valor: 90.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 160.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 80.00,
            aberto: false
        }
    },
    'SM-A710F': {
        modelo: 'Galaxy A7 2016',
        variante: 'SM-A710F',
        viaBox: {
            disponivel: true,
            valor: 85.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 155.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 75.00,
            aberto: false
        }
    },
    'SM-A700F': {
        modelo: 'Galaxy A7 2015',
        variante: 'SM-A700F',
        viaBox: {
            disponivel: true,
            valor: 80.00,
            aberto: true
        },
        viaServer: {
            disponivel: true,
            valor: 150.00,
            aberto: false
        },
        viaImei: {
            disponivel: true,
            valor: 70.00,
            aberto: false
        }
    }
};

// Função auxiliar para normalizar texto para busca
function normalizeText(text) {
    return text.toUpperCase().trim().replace(/\s+/g, '');
}

function searchDevice() {
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    
    // Verifica se o input existe e obtém seu valor
    if (!searchInput) {
        console.error('Elemento searchInput não encontrado');
        return;
    }
    
    const searchValue = searchInput.value;
    
    // Verifica se o campo está vazio ou contém apenas espaços
    if (!searchValue || searchValue.trim() === '') {
        alert('Por favor, digite um modelo ou variante de celular válido!');
        return;
    }
    
    // Normaliza o texto para busca
    const normalizedInput = normalizeText(searchValue);
    
    // Limpa resultados anteriores
    resultDiv.style.display = 'none';
    
    // Procura por correspondência direta na variante
    let device = deviceDatabase[normalizedInput];
    
    // Se não encontrou pela variante, procura pelo modelo
    if (!device) {
        device = Object.values(deviceDatabase).find(d => 
            normalizeText(d.modelo).includes(normalizedInput) || 
            normalizeText(d.variante).includes(normalizedInput)
        );
    }
    
    if (device) {
        // Preenche as informações
        document.getElementById('modelInfo').textContent = device.modelo;
        document.getElementById('variantInfo').textContent = device.variante;
        
        // Via Box
        document.getElementById('viaBox').innerHTML = device.viaBox.disponivel 
            ? 'Sim' 
            : 'Não';
        document.getElementById('viaBox').className = `status ${device.viaBox.disponivel ? 'sim' : 'nao'}`;
        document.getElementById('viaBoxValue').textContent = device.viaBox.disponivel 
            ? `R$ ${device.viaBox.valor.toFixed(2).replace('.', ',')}` 
            : '';
        document.getElementById('viaBoxType').innerHTML = device.viaBox.disponivel 
            ? (device.viaBox.aberto ? '(Aberto)' : '<span class="fechado">(Fechado)</span>') 
            : '';
        
        // Via Servidor
        document.getElementById('viaServer').innerHTML = device.viaServer.disponivel 
            ? 'Sim' 
            : 'Não';
        document.getElementById('viaServer').className = `status ${device.viaServer.disponivel ? 'sim' : 'nao'}`;
        document.getElementById('viaServerValue').textContent = device.viaServer.disponivel 
            ? `R$ ${device.viaServer.valor.toFixed(2).replace('.', ',')}` 
            : '';
        document.getElementById('viaServerType').innerHTML = device.viaServer.disponivel 
            ? (device.viaServer.aberto ? '(Aberto)' : '<span class="fechado">(Fechado)</span>') 
            : '';
        
        // Via IMEI
        document.getElementById('viaImei').innerHTML = device.viaImei.disponivel 
            ? 'Sim' 
            : 'Não';
        document.getElementById('viaImei').className = `status ${device.viaImei.disponivel ? 'sim' : 'nao'}`;
        document.getElementById('viaImeiValue').textContent = device.viaImei.disponivel 
            ? `R$ ${device.viaImei.valor.toFixed(2).replace('.', ',')}` 
            : '';
        document.getElementById('viaImeiType').innerHTML = device.viaImei.disponivel 
            ? (device.viaImei.aberto ? '(Aberto)' : '<span class="fechado">(Fechado)</span>') 
            : '';
        
        resultDiv.style.display = 'block';
    } else {
        alert('Modelo não encontrado no banco de dados!');
    }
}

// Adiciona evento de tecla Enter no campo de busca
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchDevice();
    }
});


// Função para contar total de aparelhos no banco de dados
function contarAparelhos() {
    const totalAparelhos = Object.keys(deviceDatabase).length;
    document.getElementById('total-modelos').textContent = totalAparelhos;
}

// Adiciona evento para contar aparelhos quando a página carregar
window.addEventListener('load', function() {
    contarAparelhos();
});

// Adiciona evento de clique no documento para fechar a consulta
document.addEventListener('click', function(e) {
    const resultDiv = document.getElementById('result');
    const searchInput = document.getElementById('searchInput');
    
    // Verifica se o clique foi fora da área de resultado e do campo de busca
    if (!resultDiv.contains(e.target) && e.target !== searchInput && resultDiv.style.display === 'block') {
        // Limpa o campo de busca
        searchInput.value = '';
        // Esconde o resultado
        resultDiv.style.display = 'none';
    }
});