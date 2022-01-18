/**
 * @swagger
 *  /addUser:
 *    post:
 *      description: 유저 등록 성공
 *      parameters:
 *      - in: body
 *        name: body
 *        description: Created user object
 *        required: true
 *      responses:
 *       '200':
 *        description: 유저 등록 성공
 */


/**
 * @swagger
 *  /login:
 *    post:
 *      description: 로그인 성공
 *      parameters:
 *      - in: body
 *        name: body
 *        description: Login user object
 *        required: true
 *      responses:
 *       '200':
 *        description: 로그인 성공
 */

/**
 * @swagger
 *  /logout:
 *    post:
 *      description: 로그아웃 성공
 *      parameters:
 *      - name: sessionid
 *        in: header
 *        required: true
 *        type: string
 *      - in: body
 *        name: body
 *        description: Logout user object
 *        required: true
 *      responses:
 *       '200':
 *        description: 로그아웃 성공
 */



/**
 * @swagger
 *  /getUsers:
 *    get:
 *      description: 모든 제품 조회
 *      responses:
 *       '200':
 *        description: 제품 조회 성공
 */


//=============================================================
//=============================================================
//=============================================================
/**
 * @swagger
 *  /addProduct:
 *    post:
 *      description: 제품 등록 성공
 *      parameters:
 *      - in: body
 *        name: body
 *        description: Created product object
 *        required: true
 *      responses:
 *       '200':
 *        description: 제품 등록 성공
 */

/**
 * @swagger
 *  /getProducts:
 *    get:
 *      description: 모든 제품 조회
 *      responses:
 *       '200':
 *        description: 제품 조회 성공
 */

/**
 * @swagger
 *  /getProducts:
 *    get:
 *      parameters:
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 20
 *           default: 5
 *         required: false
 *      responses:
 *       '200':
 *        description: 제품 조회 성공(skip, limit)
 */

/**
 * @swagger
 *  /getProducts/{id}:
 *    get:
 *      description: id별 조회
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID of product to return
 *        required: true
 *      responses:
 *       '200':
 *        description: 제품 조회 성공
 */

/**
 * @swagger
 *  /getProducts_cnt:
 *    get:
 *      description: 모든 제품 갯수 (카운트)
 *      responses:
 *       '200':
 *        description: 제품 조회 성공
 */

/**
 * @swagger
 *  /updateProduct/{id}:
 *    put:
 *      description: id별 조회
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID of product to return
 *        required: true
 *      - in : body
 *        name : body
 *        description : Updated user object
 *        required : true
 *      responses:
 *       '200':
 *        description: 제품 수정 성공
 */


/**
 * @swagger
 *  /deleteProductById/{id}:
 *    delete:
 *      description: id별 조회
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID of product to return
 *        required: true
 *      responses:
 *       '200':
 *        description: 제품 삭제 성공
 */

//Model


// 참조문서
// https://app.swaggerhub.com/apis/pjsw5476/test_A/1.0.0#/user/createUser
// https://swagger.io/docs/specification/describing-parameters/