package org.ecommerce.services;

import org.ecommerce.models.entity.CartItems;
import org.ecommerce.repositories.CartItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemsService {

    @Autowired
    private CartItemsRepository cartItemsRepository;

    public List<CartItems> getAllCartItemsService(String userName){
        return this.cartItemsRepository.findByUserName(userName);
    }
    public List<CartItems> getCartByUser(String email){
        return this.cartItemsRepository.findByClientAndEmail(email);
    }
    public void cleanCart(Long id){
        this.cartItemsRepository.deleteByUserId(id);
    }
    public Long getCountByUser(Long id){
        return this.cartItemsRepository.countByUserId(id);
    }

}
