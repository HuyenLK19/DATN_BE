import express from "express";
import receiptController from '../controllers/receiptController';
import shopCartController from '../controllers/shopCartController';
import statisticController from '../controllers/statisticController';
import supplierController from '../controllers/supplierController';
let router = express.Router();

let initwebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello")
    })
     //=================API RECEIPT================================//
     router.post('/api/create-new-receipt', middlewareControllers.verifyTokenAdmin, receiptController.createNewReceipt)
     router.get('/api/get-detail-receipt', receiptController.getDetailReceiptById)
     router.get('/api/get-all-receipt', receiptController.getAllReceipt)
     router.put('/api/update-receipt', middlewareControllers.verifyTokenAdmin, receiptController.updateReceipt)
     router.delete('/api/delete-receipt', middlewareControllers.verifyTokenAdmin, receiptController.deleteReceipt)
     router.post('/api/create-new-detail-receipt', middlewareControllers.verifyTokenAdmin, receiptController.createNewReceiptDetail)

       //=================API SHOPCART==========================//
    router.post('/api/add-shopcart', middlewareControllers.verifyTokenUser, shopCartController.addShopCart)
    router.get('/api/get-all-shopcart-by-userId', middlewareControllers.verifyTokenUser, shopCartController.getAllShopCartByUserId)
    router.delete('/api/delete-item-shopcart', middlewareControllers.verifyTokenUser, shopCartController.deleteItemShopCart)

    //=================API STATISTIC==============================//
    router.get('/api/get-count-card-statistic', middlewareControllers.verifyTokenAdmin, statisticController.getCountCardStatistic)
    router.get('/api/get-count-status-order', middlewareControllers.verifyTokenAdmin, statisticController.getCountStatusOrder)
    router.get('/api/get-statistic-by-month', middlewareControllers.verifyTokenAdmin, statisticController.getStatisticByMonth)
    router.get('/api/get-statistic-by-day', middlewareControllers.verifyTokenAdmin, statisticController.getStatisticByDay)
    router.get('/api/get-statistic-overturn', middlewareControllers.verifyTokenAdmin, statisticController.getStatisticOverturn)
    router.get('/api/get-statistic-profit', middlewareControllers.verifyTokenAdmin, statisticController.getStatisticProfit)
    router.get('/api/get-statistic-stock-product', middlewareControllers.verifyTokenAdmin, statisticController.getStatisticStockProduct)

      //=================API SUPPLIER================================//
      router.post('/api/create-new-supplier', middlewareControllers.verifyTokenAdmin, supplierController.createNewSupplier)
      router.get('/api/get-detail-supplier', supplierController.getDetailSupplierById)
      router.get('/api/get-all-supplier', supplierController.getAllSupplier)
      router.put('/api/update-supplier', middlewareControllers.verifyTokenAdmin, supplierController.updateSupplier)
      router.delete('/api/delete-supplier', middlewareControllers.verifyTokenAdmin, supplierController.deleteSupplier)
    return app.use("/", router);



      
}

module.exports = initwebRoutes;